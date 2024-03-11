import ServerGuardComponent from "@/components/ServerGuardComponent";

export default function WishListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ServerGuardComponent>
        <div>{children}</div>
      </ServerGuardComponent>
    </>
  );
}
