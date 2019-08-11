package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/say", func(context *gin.Context) {
		context.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		context.JSON(http.StatusOK, gin.H{"message": "สวัสดีชาวโลก"})
	})
	router.Run(":4444")
}
