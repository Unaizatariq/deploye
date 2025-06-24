// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export const metadata = {
  title: "CRUD App",
  description: "A simple CRUD app with Prisma + Neon + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 ">
        {/* Navigation shown on all pages */}
        <nav className="flex justify-center p-6 border-b shadow bg-white">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="text-md font-medium text-blue-600 hover:underline"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/student/create"
                    className="text-md font-medium text-blue-600 hover:underline"
                  >
                    Create
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/student/list"
                    className="text-md font-medium text-blue-600 hover:underline"
                  >
                    List
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Main page content */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
