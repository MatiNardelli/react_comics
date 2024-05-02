import { heroes } from  '../../../public/data/heroes';

export const getHeroById = (id) =>{
    // si existe lo regrasa, si no undifined
    return heroes.find(hero=>hero.id===id);

}