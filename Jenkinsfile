pipeline {
    agent any
    
    stages {
        stage("build") {
            steps {
                echo 'building'
                sh 'docker images'
                sh 'docker build --no-cache -t github-blog .'
            }
        }

        stage("test") {
            steps {
                echo 'testing'
            }
        }

        stage("deployment") {
            steps {
                echo 'deploying'
                sh 'docker images'
                sh 'docker service create --name github-blog -p 80:80 github-blog:latest || docker service update github-blog'
            }
        }
    }
}