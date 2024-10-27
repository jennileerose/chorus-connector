import { Injectable } from "@angular/core";
import * as choirData from '../../data.json'

@Injectable({ providedIn: 'root' })

export class DataService {

  choirData = choirData.choruses;

}