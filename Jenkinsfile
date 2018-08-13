pipeline {
    agent { label 'local' }
	tools {
		maven 'Maven 3.5.4'
		jdk 'JDK8'
	}
	environment {
		jar_file = 'server.jar'		
	}
    stages {
        stage('Build') {
            steps {
				echo 'Building..'
				dir("server") {
					sh 'mvn clean package -Dmaven.test.skip=true'
					dir("target") {
						stash includes: 'good-habits-0.0.1.jar', name: 'JAR'
					}
				}
				dir("client") {
					sh 'ng build --prod --build-optimizer'
            }
        }
        stage('Test') {
            steps {
				echo 'Testing...'
			}
		}
		stage('Deploy') {
            steps {
				echo 'Deploying...'
                
            }
        }
    }
	post {
        always {
			archiveArtifacts artifacts: '**/*.jar', fingerprint:true
            deleteDir() /* clean up our workspace */
        }        
    }
}