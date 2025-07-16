import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3 className="text-red-500">Welcome Home!!!</h3>

      <Button onClick={() => toast.info("Yoo")}>Hello</Button>
    </div>
  );
}
