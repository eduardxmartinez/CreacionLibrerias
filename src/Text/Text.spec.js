import { render } from '@testing-library/react'
import Text from './Text'

describe("@components/Text", () => {
    it("Render Text", () => {
        // arrange
        const {getByRole} = render(
            <Text component="h1" fontSize="30px" >Aventuras</Text>
        )
        // act
        const TextTest = getByRole("heading", {name: /Aventuras/i });
        // assert
        expect(TextTest).toBeDefined();
        expect(TextTest).toHaveStyle("font-size: 30px")
        
    })
})