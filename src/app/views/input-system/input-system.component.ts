import {Component, OnInit} from '@angular/core';
import {NosyHttpService} from './nosy-http.service';
import {InputSystem} from './input-system';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-input-system',
  templateUrl: './input-system.component.html'

})
export class InputSystemComponent implements OnInit {
  selectedInputSystemId: string;

  inputSystems: InputSystem[];
  firstFormEnable: boolean;
  postSuccessMessage: string;
  isPostSuccess: boolean;
  colourPostSuccessMessage: string;
  operationsUpdateAndDelete: string;
  isOperationsUpdateAndDelete: boolean;
  colourOperationsUpdateAndDelete: string;
  firstFormUpdatableInputSystem: InputSystem;

  constructor(private nosyHttpService: NosyHttpService) {}

  ngOnInit() {
    this.nosyHttpService.getInputSystems().subscribe(
      data => {
        this.inputSystems = data;
      })
  }

  onChange(inputSystemName) {
    this.allFormReset();

    this.firstFormEnable = true;
    this.firstFormUpdatableInputSystem = inputSystemName;
  }

  firstForm(colour, message, isEnabled) {
    this.colourOperationsUpdateAndDelete = colour;
    this.isOperationsUpdateAndDelete = isEnabled;
    this.operationsUpdateAndDelete = message;
  }

  secondForm(colour, message, isEnabled) {
    this.colourPostSuccessMessage = colour;
    this.isPostSuccess = isEnabled;
    this.postSuccessMessage = message;
  }

  onClear() {
    this.firstFormEnable = false;
  }

  updateExistingSystem(updatedForm: NgForm) {
    this.allFormReset();

     updatedForm = updatedForm.value;
     if (updatedForm['updateExistingInputSystemName'] === null || updatedForm['updateExistingInputSystemName'] === '') {
      this.firstForm('red', 'System Name cannot be null or empty', true)
    } else {
      this.firstForm('', '', false)

      const inputSystem: InputSystem = <InputSystem>{
        id: this.selectedInputSystemId,
        name: updatedForm['updateExistingInputSystemName'],
        emailTemplate: null
      };
      this.nosyHttpService.updateExistingInputSystem(inputSystem).subscribe(
        (response: InputSystem) => {
          this.inputSystems.find(x => x.id === response.id).name = response.name;
          this.firstForm('green', 'Successfully updated input system name to' + updatedForm['updateExistingInputSystemName'], true);
          this.inputSystems = [ ... this.inputSystems ];
        },
        err => {
          this.firstForm('red', err.error.message, true);
        })
    }

  }

  deleteExistingSystem() {
    this.allFormReset();

    this.nosyHttpService.deleteExistingInputSystem(this.selectedInputSystemId).subscribe(
      (response: any) => {

        this.firstForm('green', 'Input System ' + this.firstFormUpdatableInputSystem.name + ' deleted!', true)

        this.inputSystems.splice(this.inputSystems.indexOf(
        this.inputSystems.find(x => x.id === this.selectedInputSystemId)), 1);
        this.inputSystems = [ ... this.inputSystems ];

      })
  }

  newInputSystem(inputSystemName) {
    if (inputSystemName === null || inputSystemName === '') {
      this.secondForm('red', 'System Name cannot be null or empty', true)
    } else {
    this.allFormReset();
    this.nosyHttpService.postInputSystemName(inputSystemName).subscribe(
      (response: InputSystem) => {
        this.secondForm('green', 'successfully created Input System ' + inputSystemName, true);
        this.inputSystems = [ ... this.inputSystems, response];
      }, err => {
          this.secondForm('red', err.error.message, true)
      }
      )
    }
  }

  allFormReset() {
    this.secondForm('', '', false);
    this.firstForm('', '', false);
  }
}


