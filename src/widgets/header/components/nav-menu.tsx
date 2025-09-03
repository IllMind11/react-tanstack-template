import { Link } from '@tanstack/react-router'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '~/shared/ui/navigation-menu'

export function NavMenu(props: typeof NavigationMenu) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className={`
        gap-6 space-x-0
        data-[orientation=vertical]:flex-col
        data-[orientation=vertical]:items-start
      `}
      >
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to=".">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to=".">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
