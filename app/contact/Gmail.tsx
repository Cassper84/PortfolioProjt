import { Card, CardContent } from "@/components/ui/card";

export default function Gmail() {
  return (
    <Card className="mt-10 border-0 border-t-2 border-b-2 shadow-lg rounded-none dark:border-gray-700">
      <CardContent className="py-6 text-center bg-white dark:bg-transparent">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Or send me a direct email at
        </p>
        <p className="text-lg font-semibold text-black dark:text-white">
          onopeter121@gmail.com
        </p>
      </CardContent>
    </Card>
  );
}
