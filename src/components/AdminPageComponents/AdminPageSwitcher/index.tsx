import { AboutMeComponent } from "../"


interface IAdminPageSwitcher {
    page: string | string[] | undefined
}

const AdminPageSwitcher = ({ page }: IAdminPageSwitcher) => {
    switch(page) {

        case 'about-me': return <AboutMeComponent />

        default: return <></>
    }
}

export default AdminPageSwitcher