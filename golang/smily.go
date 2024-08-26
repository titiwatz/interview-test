package main

import "regexp"

func CountSmilyFace(strings []string) int {
	smileyPattern := `(:[-~]?[)D]|;[-~]?[)D])`

	re := regexp.MustCompile(smileyPattern)

	totalCount := 0

	for _, s := range strings {
		matches := re.FindAllString(s, -1)
		totalCount += len(matches)
	}

	return totalCount
}
