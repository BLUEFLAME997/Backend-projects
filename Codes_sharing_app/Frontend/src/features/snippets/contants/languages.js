export const LANGUAGE_VERSIONS = {
  c: 50,
  cpp: 54,
  java: 62,
  javascript: 63,
  python: 71,
  php: 68,
  csharp: 51,
  go: 60,
  rust: 73,
  typescript: 74,
};

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");`,

  typescript: `type Params = {
  name: string;
};

function greet(data: Params) {
  console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" });`,

  python: `def greet(name):
  print("Hello, " + name + "!")

greet("Alex")`,

  java: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,

  c: `#include <stdio.h>

int main() {
  printf("Hello World");
  return 0;
}`,

  cpp: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}`,

  php: `<?php
$name = "Alex";
echo "Hello, " . $name . "!";
?>`,

  csharp: `using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}`,

  go: `package main

import "fmt"

func main() {
  fmt.Println("Hello World")
}`,

  rust: `fn main() {
  println!("Hello, World!");
}`
};