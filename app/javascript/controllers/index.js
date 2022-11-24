// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ApprovalController from "./approval_controller"
application.register("approval", ApprovalController)

import BackupController from "./backup_controller"
application.register("backup", BackupController)

import CheckoutController from "./checkout_controller"
application.register("checkout", CheckoutController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import StarDisplayController from "./star_display_controller"
application.register("star-display", StarDisplayController)

import StarRatingController from "./star_rating_controller"
application.register("star-rating", StarRatingController)
