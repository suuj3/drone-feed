/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_HOSTNAME: "http://localhost:3000/api/",
        MONGODB_URI: "mongodb://localhost:27017/drone",
        NEXTAUTH_URL: "http://localhost:3000",
        NEXTAUTH_SECRET: "drone",
        SECRET: "meow"

    }
};

export default nextConfig;