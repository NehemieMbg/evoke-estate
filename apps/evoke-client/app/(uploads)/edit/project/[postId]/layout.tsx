import IsAuthenticated from '@/app/components/protectors/IsAuthenticated';

export default async function UploadProjectLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <IsAuthenticated>
      <main>{children}</main>
    </IsAuthenticated>
  );
}
