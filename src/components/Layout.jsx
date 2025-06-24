import { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function Layout() {
  const pathname = useLocation().pathname;
  const isHomePage = useMemo(() => {
    return pathname === "/";
  }, [pathname]);

  return (
    <div>
        {!isHomePage && (
            <header className="px-32 flex items-center justify-between text-white py-4 flex-col gap-2 md:flex-row">
            <Link to={'/'} className="text-4xl text-red-600 font-bold text-shadow-lg">MovieX</Link>
          </header>
        )}
      <Outlet />
    </div>
  );
}
