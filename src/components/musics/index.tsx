import * as C from './styles';

type Props = {
    img: string;
    name: string;
    author: string;
    audio: string;
    musicId: string;
    id: string;
    isFull: boolean;
    Playlist: string;
    Playlists: string;
    isSearch: boolean;
    search: string;
    windowWidth: number;
    setId: (e: string) => void;
    setIsFull: (e: boolean) => void;
}

export const Musics = ({ img, name, author, audio, musicId, isFull, id, Playlist, Playlists, isSearch, search, windowWidth, setId }: Props) => {
    return (
        <C.Container>
            { isSearch ? 
                search.toLowerCase() === name.toLowerCase() || search === author.toLowerCase() || search === Playlist.toLowerCase() ?
                <div className='divPlaylist' onClick={() => setId(musicId)}>
                    <img src={img} />
                    <h1>{name}</h1>
                    <h3>{author}</h3>
                    <audio src={audio} />
                </div> 
                : ''
                
             :           
                Playlists !== '' ? 
                    Playlist === Playlists ? 
                        <div className='divPlaylists' onClick={() => setId(musicId)}>
                            <img src={img} />
                            <h1>{name}</h1>
                            <h3>{author}</h3>
                            <audio src={audio} />
                        </div> 
                        : ''

                    :
                    isFull && windowWidth <= 810 ? 
                        musicId === id  ?
                        <div className='containerFull'>
                            <div className='divFull'>
                                <img src={img} alt="" />
                                <h1>{name}</h1>
                                <h3>{author}</h3>
                            </div>
                        </div>
                        : ''
                        
                    :
                        
                        <div className='divAll' onClick={() => setId(musicId) }>
                            <img src={img} />
                            <h1>{name}</h1>
                            <h3>{author}</h3>
                            <audio src={audio} />
                        </div>                   
            }
        </C.Container>
    )
}
