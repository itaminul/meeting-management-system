import Breadcrumbs, { breadcrumbItem } from "../breadcrumbs/breadcrumbs";

export default async function Page() {
  const breadcrumbItems: breadcrumbItem[] = [
    {href: "/", label: "Home", icon: 'home'},
     { href: "/menu", label: "Employee" },
    { href: "/menu/submenu/current-page", label: "All Employee" },
  ];
   
  return <div>
    <Breadcrumbs items={breadcrumbItems} />
  </div>;
}
