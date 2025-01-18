package main

import "fmt"

func sum_to_n_a(n int) int {
	// complexity O(1)
	return n * (n + 1) / 2
}

func sum_to_n_b(n int) int {
	// complexity O(n)
	sum := 0
	for i := 1; i <= n; i++ {
		sum += i
	}
	return sum
}

func sum_to_n_c(n int) int {
	// complexity O(n)
	if n == 0 {
		return 0
	}
	return n + sum_to_n_c(n-1)
}

func main() {
	sum := sum_to_n_a(5)
	fmt.Println(sum)
	sum = sum_to_n_b(5)
	fmt.Println(sum)
	sum = sum_to_n_c(5)
	fmt.Println(sum)
}
