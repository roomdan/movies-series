import { useState } from "react";
import MoviesView from "./movies-app/movies-view.js";
import SearchMovie  from "./movies-app/search.js";
import CategoriesFirst from "./other-sections/categorized.js";
import "./other-sections/categories.main.scss"

const Home = ()=>{

    const categorizeds = ['action', 'hero', 'aventure'];
    const azar = Math.floor( Math.random() * categorizeds.length);

    const [form, setForm] = useState({name:categorizeds[azar], type:'serie'})

    return (
        <>
        <SearchMovie form={i=>{setForm(i)}}/>
        <MoviesView name={form.name}></MoviesView>
        <CategoriesFirst></CategoriesFirst>
        </>
    )
}

export default Home