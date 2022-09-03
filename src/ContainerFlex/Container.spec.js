import { render } from '@testing-library/react'
import ContainerFlex from './ContainerFlex'

describe('@components/ContainerFlex', () => {
    it("ads", () => {
        // arrange
        const {getByRole} = render(
            <ContainerFlex role="banner"/>
        )
        // act
        const ContainerFlexTest = getByRole("banner")
        // asert
        expect(ContainerFlex).toBeDefined();
    })

    it("background color", () => {
        // arrange
        const {getByRole} = render(
            <ContainerFlex role="banner" bgColor="white"/>
        )
        // act
        const ContainerFlexTest = getByRole("banner")
        // asert
        expect(ContainerFlexTest).toBeDefined();
        expect(ContainerFlexTest).toHaveStyle(`background-color: white`)
    })
})