import { render } from '@testing-library/react'
import MediaImg from './MediaImg'

describe("@components/MediaImg", () => {
    it("Render MediaImg", () => {
        // arrange
        const {getByRole} = render(
            <MediaImg alt="Platzi" src="http://www.platzi.com/img" width={"200px"} height={"200px"} borderRadius={"50%"}/>
        )
        // act
        const MediaImgTest = getByRole("img")
        // assert
        expect(MediaImgTest).toBeInTheDocument();
        expect(MediaImgTest).toHaveAttribute("src", "http://www.platzi.com/img");
        expect(MediaImgTest).toHaveAttribute("alt","Platzi");
        expect(MediaImgTest).toHaveStyle("width: 200px");
        expect(MediaImgTest).toHaveStyle("height: 200px")
        expect(MediaImgTest).toHaveStyle("border-radius: 50%")
    })
})