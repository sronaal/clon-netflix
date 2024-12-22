export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <h1>AuthLayaout </h1>
                { children }
            </body>
        </html>
    );
}
