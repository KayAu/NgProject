import { Component } from '@angular/core';
import { map, from, Observable, filter, scan, take, toArray, repeat, takeWhile } from 'rxjs';

@Component({
  selector: 'task2',
  templateUrl: './task2.html'
})

export class Task2 {
  func1Answers: string[] = []; 
  func2Answers: string[] = [];
  func3Answers: string[] = [];
  func4Answers: string[] = [];

  function1(param: string[] = ['John', 'ABC', 'Terraformation']) {
    const obsParam = from(param);
    obsParam.pipe(
      filter((item: any) => item.length > 3),
      map((item: string) => item.toLowerCase())).subscribe((results: any) => {
        console.log(results);
        this.func1Answers.push(results);
      });
  }

  function2(param: string[] = ['abc', 'aaaaa', 'aaaab', 'Aa']) {
    const obsParam = from(param);
    obsParam.pipe(
      map((item: string) => {
        const uniqChars = new Set(item.split(''));
        return uniqChars.size;
      }))
      .subscribe((results: any) => {
        console.log(results);
        this.func2Answers.push(results);
      });
  }
  
  function3(param: string[] = ['xyz', 'rx', 'end', 'codility']) {
    const obsParam = from(param);
    obsParam.pipe(
      takeWhile((item: string) => item !== 'end', true),
      filter((item: string) => item !== 'end')
      )
      .subscribe((results: any) => {
        console.log(results);
        this.func3Answers.push(results);
      });
  }

  function4(param: number[] = [10, 25]) {
    const obsParam = from(param);
    obsParam.pipe(
        scan((agg: number, cur: number) => agg + cur, 0),
        toArray(),
        repeat(2)
        )
        .subscribe((results: any) => {
          console.log(results);
          this.func4Answers.push(results);
        });
    }
}
