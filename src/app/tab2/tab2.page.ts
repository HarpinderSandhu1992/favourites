import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}


  songs = [
    {
      title:' Take On Me',
      artist: 'Wow',
      album: 'Take On Me',
    },
    {
      title:' Wow',
      artist: 'Wow',
      album: 'Take On Me',
    },
    {
      title:' Hello',
      artist: 'Wow',
      album: 'Take On Me',
    },
    {
      title:' Mind on you',
      artist: 'Wow',
      album: 'Take On Me',
    },
    {
      title:' Go!',
      artist: 'Wow',
      album: 'Take On Me',
    },
  ]
  public isDisabled = true;


  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log(ev);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorder() {
    this.isDisabled = !this.isDisabled;
  }
}

