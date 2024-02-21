import NewTodoForm from "@/components/NewTodoForm";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div> {children}</div>
    </div>
  );
}
