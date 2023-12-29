import { data } from "../assets/data"

export function useGetData() {



    const GetImageUrl = (name, set) => {
        const largeur = window.innerWidth
        const dataProduct = data.find((product) => product.name === name)

        if (largeur <= 425) set(dataProduct?.categoryImage.mobile)
        if (largeur > 425 && largeur <= 768) set(dataProduct?.categoryImage.tablet)
        if (largeur > 768) set(dataProduct?.categoryImage.desktop)
    }


    return { GetImageUrl }
}
