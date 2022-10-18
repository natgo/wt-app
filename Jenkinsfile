pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Start Dev server') {
      steps {
        sh 'nohup npm run dev &'
      }
    }

    stage('Run Cypress tests') {
      steps {
        sh 'npx cypress run'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'rm -r /wt/*'
      }
    }

  }
  tools {
    nodejs 'NodeJS 16'
  }
  post {
    always {
      echo 'Stopping local server'
      sh 'pkill -f vite'
    }

  }
}