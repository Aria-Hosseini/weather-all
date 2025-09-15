import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

let mainWindow;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false, 
    maximizable: false,
    autoHideMenuBar: true,   
    icon: path.join(__dirname, "public", "weather-app.ico"),
    webPreferences: {
      nodeIntegration: false,
    },
  });

  const isDev = !app.isPackaged;

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "dist/index.html")); 
  }
});
