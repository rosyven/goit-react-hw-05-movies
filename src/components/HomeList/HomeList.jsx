import HomeItem from "./HomeItem/HomeItem";
import css from "./HomeList.module.css";

const HomeList = ({ movies }) => {
    return (
        <ul className={css.home_list}>
            {movies.map(({ id, title, poster_path }) => (
                <HomeItem key={id} title={title} poster_path={poster_path} id={id} />
            ))}
        </ul>
    );
};
export default HomeList;