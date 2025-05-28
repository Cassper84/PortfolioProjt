import { ReactNode } from "react";

export default function AboutLayout({
  children,
  profile,
  skills,
}: {
  profile: ReactNode;
  skills: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen gap-4 p-4">
      <aside className="w-full lg:w-1/5 p-4 border-r">
        {profile}
      </aside>
      <main className="w-full lg:w-2/4 p-4 lg:ml-16">
        {skills}
      </main>
      <section className="w-full lg:w-1/4 p-4 border-l">
        {children}
      </section>

    </div>
  );
}
