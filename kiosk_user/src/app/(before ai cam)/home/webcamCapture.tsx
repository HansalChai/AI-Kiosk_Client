"use client";

import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import axios from "axios";

interface UploadResponse {
  message: string;
  age: string;
}

interface WebcamCaptureProps {
  onCapture: (response: UploadResponse) => void;
}

const WebcamCapture = forwardRef(({ onCapture }: WebcamCaptureProps, ref) => {
  const [isCaptured, setIsCaptured] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const webcamRef = useRef<Webcam | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useImperativeHandle(ref, () => ({
    captureImage() {
      if (webcamRef.current) {
        const capturedSrc = webcamRef.current.getScreenshot();
        setImageSrc(capturedSrc);
        setIsCaptured(true);
      }
    },
  }));

  useEffect(() => {
    if (imageSrc && canvasRef.current) {
      const canvasElement = canvasRef.current;
      const context = canvasElement.getContext("2d");
      if (context) {
        const img = new Image();
        img.onload = () => {
          context.drawImage(
            img,
            0,
            0,
            canvasElement.width,
            canvasElement.height
          );
          canvasElement.toBlob(async (blob) => {
            if (blob) {
              const formData = new FormData();
              formData.append("file", blob, "captured_image.jpg");

              try {
                console.log("Uploading image...");
                const response = await axios.post<UploadResponse>(
                  process.env.NEXT_PUBLIC_API_BASE_URL + "/predict/",
                  formData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                onCapture(response.data); // 응답 데이터를 부모 컴포넌트에 전달
                console.log("Image uploaded successfully", response.data);
              } catch (error) {
                console.error("Error uploading image", error);
              }
            } else {
              console.error("Blob is null");
            }
          }, "image/jpeg");
        };
        img.src = imageSrc;
      }
    }
  }, [imageSrc]);

  return (
    <div>
      <WebCameVideo>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          height={480}
        />
      </WebCameVideo>
      {isCaptured && <WebCamCanvas ref={canvasRef} width={640} height={480} />}
    </div>
  );
});

WebcamCapture.displayName = "WebcamCapture";

const WebCameVideo = styled.div`
  display: block;
`;

const WebCamCanvas = styled.canvas`
  display: none;
`;

export default WebcamCapture;
