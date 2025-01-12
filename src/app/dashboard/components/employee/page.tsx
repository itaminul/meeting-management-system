import Breadcrumbs, { breadcrumbItem } from "../breadcrumbs/breadcrumbs";

export default async function Page() {
  const breadcrumbItems: breadcrumbItem[] = [
    {href: "/", label: "Home", icon: 'home'},
     { href: "/menu", label: "Menu" },
    { href: "/menu/submenu", label: "Submenu" },
    { href: "/menu/submenu/current-page", label: "Current Page" },
  ];
  
  
  return <div>
    <Breadcrumbs items={breadcrumbItems} />
  </div>;
}
