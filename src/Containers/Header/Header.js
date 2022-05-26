//This is the header part that contains the search bar
import {Searchbar} from '../../Components/index'
import './Header.css'

const Header = () => {
    return (
        <section id="header">
            <div className="row header-row justify-content-center align-items-center" >
                <div className="col-11 col-lg-7">
                    <Searchbar></Searchbar>
                </div>
            </div>
        </section>

    )
}

export default Header
