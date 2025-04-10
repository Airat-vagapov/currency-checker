import type { NextConfig } from "next";
import path from "path";
import nextPWA from "next-pwa";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

const withPWA = nextPWA({
    dest: "public", // Папка, где будут находиться файлы Service Worker
    register: true, // Автоматическая регистрация Service Worker
    skipWaiting: true, // Пропуск ожидания, чтобы сразу активировать новый SW
});

const nextConfig: NextConfig = {
    webpack: (config) => {
        config.resolve.alias["@"] = path.resolve("./src");
        return config;
    },
};

export default withPWA(nextConfig);
