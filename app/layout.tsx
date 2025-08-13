import "./globals.css";
import { Toaster} from "react-hot-toast";
import AOSProvider from "@/providers/AOSProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <AOSProvider>
        {children}
        <Toaster position="top-right"
        toastOptions={{
          style: {
            background: "#000000",
            color: "#fff",
          },
        }}/>
        </AOSProvider>
      </body>
    </html>
  );
};
export default RootLayout;