import 'dotenv/config';
import { app } from './app.js';

const port = +(process.env.PORT ?? 3000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error(
    `Ошибка: порт ${port} недопустим. Порт должен быть в диапазоне от 1 до 65535.`,
  );
  process.exit(1);
}

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
