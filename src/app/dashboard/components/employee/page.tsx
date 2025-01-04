import Breadcrumbs, { breadcrumbItem } from "../breadcrumbs/breadcrumbs";

export default async function Page() {
  const breadcrumbItems: breadcrumbItem[] = [
    {href: "/", label: "Home", icon: 'home'}
  ]
  return <div>
    <Breadcrumbs items={breadcrumbItems} />
  </div>;
}
