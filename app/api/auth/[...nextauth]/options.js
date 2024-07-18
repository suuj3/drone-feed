import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const baseURL = `${process.env.NEXT_PUBLIC_HOSTNAME}/login`;

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(baseURL, {  
            method: "POST",
            body: JSON.stringify({
              email: credentials.username,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const resdata = await res.json();

          if (res.status === 200 || res.status === 201) {
            return resdata;
          } else {
            console.error("Login error:", resdata);
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    // signIn: "/",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
};

export default (req, res) => NextAuth(req, res, authOptions);