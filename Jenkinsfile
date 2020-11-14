pipeline {
    agent any
    
    stages {
        stage("build") {
            steps {
                echo 'building'
            }
        }

        stage("test") {
            steps {
                echo 'testing'
                exit 1
            }
        }

        stage("deployment") {
            steps {
                echo 'deploying'
            }
        }
    }
}