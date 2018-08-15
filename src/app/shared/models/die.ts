export class Die { 
	face: number;
	state: DieState;

	constructor(face: number){
		this.face = face;
		this.state = DieState.Fresh;
	}

 	toggleDieState(): void {
		if (this.state != null){
			switch(this.state){
				case DieState.Fresh:
					this.state = DieState.Selected;
					break;
				case DieState.Selected:
					this.state = DieState.Fresh;
					break;
				case DieState.Fresh:
				default:
					throw "Invalid TieState";
			}
		}
	}
}

export enum DieState {
	Fresh = "FRESH",
	Selected = "SELECTED",
	Set = "SET"
}