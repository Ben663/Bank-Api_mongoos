import { app } from "./server/app.js";
import './server/db/connect.js'
const PORT = process.env.PORT || 6060;

app.listen(PORT, () => {
    console.log('listen on port' + PORT);
});

