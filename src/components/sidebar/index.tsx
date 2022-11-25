import * as C from './styles';
import { Createplaylist,Favourites, Home, Search } from '../../svgs/index';

type Props = {
    setPlaylist: (e: string) => void;
    setIsSearch:(e: boolean) => void;
    setIsFull:(e: boolean) => void;
    isSearch: boolean;
    isSidebar: boolean;
    setIsSidebar: (e: boolean) => void; 
    setIsFavourites:(e: boolean) => void; 
    isFavourites: boolean;
    setIsCreateplaylist:(e: boolean) => void;
    isCreateplaylist: boolean; 
}

export const Sidebar = ({ setPlaylist, setIsSearch, setIsFull, isSearch, isSidebar, setIsSidebar,setIsFavourites,isFavourites,setIsCreateplaylist,isCreateplaylist }: Props) => {
    return (
        <C.Container isSidebar={isSidebar}>
            <div className='inicialSearch'>
                <div 
                onClick={() => (setPlaylist(''), setIsSearch(false), setIsFull(false), setIsSidebar(false))} 
                className='iniSearDivs'>
                    <p><Home/></p> Home
                </div>

                <div 
                onClick={() => (setIsSearch(!isSearch), setIsSidebar(false))}className='iniSearDivs'>
                    <p><Search /></p> Search
                </div>
                <div 
                onClick={() => (setIsFavourites(!isFavourites), setPlaylist('Bollywood bash'),setIsSearch(false),setIsSidebar(false))}className='iniSearDivs'>
                    <p><Favourites /></p> Favourites
                </div>
            </div>

            <div className='Playlist'>
        
            <div
                onClick={() => (setIsCreateplaylist(!isCreateplaylist), setIsSidebar(false))}className='iniSearcDivs'>
                    <h4><Createplaylist /></h4> Create Playlist
            </div>
            <div className="container">
                 <button type="button" className="button">
☰ Playlists
  </button>
  </div> 
    <ul>
                <div 
                onClick={() =>(setPlaylist('Linkin forever') ,setIsSidebar(false), 
                setIsSearch(false))}>
                       <li>Linkin forever</li>
                </div>
                <div 
                onClick={() => (setPlaylist('Bollywood bash') ,setIsSidebar(false), setIsSearch(false))}>
                        <li>Bollywood bash</li>
                </div>
                <div 
                onClick={() => (setPlaylist('Best of Arijit') ,setIsSidebar(false), setIsSearch(false))}>
                       <li>Best of Arijit</li>
                </div>
                <div 
                onClick={() => (setPlaylist('G.O.A.T') ,setIsSidebar(false), setIsSearch(false))}>
                       <li>G.O.A.T</li>
                </div>
                </ul>
                </div>
        </C.Container>
    )
} 