import app from "./app";

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Dockify API running on port ${PORT}`);
});