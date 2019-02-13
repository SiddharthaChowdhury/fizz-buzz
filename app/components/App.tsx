import * as React from "react";
import {getFizzBuzz, IdFizzBuzz} from "../utils/fizzBuzzRules";
import Fizz from "./Fizz";
import Buzz from "./Buzz";
import FizzBuzz from "./FizzBuzz";
import Other from "./Other";

interface IAppState {
    range: number;
}
interface IAppProps {}

const initialState: IAppState = {range: 0};

export class App extends React.PureComponent<IAppProps, IAppState> {
    public state: IAppState = initialState;

    constructor (props: IAppProps) {
        super(props)

        this.updateRange = this.updateRange.bind(this);
    }

    public render() {
        const component = this.getComponent();
        
        return (
            <div>
                <div>
                    <label>Enter the range: </label>
                    <input type="text" onChange={this.updateRange} value={this.state.range}/>
                    <hr/>
                    {component}
                </div>
            </div>
        )
    }

    private getComponent () {
        const range = this.state.range;
        if (range === undefined || !/^([0-9]+)$/.test(range.toString())) {
            return <label>Invalid Range</label>
        }

        const rangeArray: number[] = [];
        for (var i = 0; i <= range; i++) {
            rangeArray.push(i);
        }

        return rangeArray.map((number, key) => {
            const componentType = getFizzBuzz(number);
            let component: JSX.Element;
            console.log(key)
            switch (componentType) {
                case IdFizzBuzz.BUZZ:
                    component = <Buzz/>;
                    break;
                case IdFizzBuzz.FIZZ:
                    component = <Fizz/>;
                    break;
                case IdFizzBuzz.FIZZBUZZ:
                    component = <FizzBuzz/>;
                    break;
                default:
                    component = <Other value={number}/>;
                    break;
            }

            return (
                <div key={key}>{component}</div>
            );
        })

    }

    private updateRange (event: any) {
        this.setState({range: event.target.value})
    }
}