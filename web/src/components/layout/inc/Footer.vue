<template>
  <div>
    <div class="footer-top bg-light pb-5 border-bottom mt-3">
      <div class="px-0 px-md-5 py-2" style="background-color: #e0eae8;border: 1px solid #9ebab6">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <h6 class="mb-0 text-primary px-0 px-md-4">{{ $t("message.footer.help_you") }}</h6>
            </div>
            <div class="col-12 col-md-6">
              <p class="mb-0 text-center">{{ $t("message.footer.follow_us") }}
                <a style="font-size: 18px"><i class="fab fa-facebook text-success"></i></a>
                <a style="font-size: 18px"><i class="fab fa-twitter-square mx-2 text-success"></i></a>
                <a style="font-size: 18px"><i class="fab fa-linkedin text-success"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="row">
              <div class="col-12 col-md">
                <div class="quick-link">
                  <router-link to="/about-us" class="text-dark">{{ $t("message.footer.about_us") }}</router-link>
                  <router-link to="/join-sales" class="text-dark">{{ $t("message.footer.join_sales") }}</router-link>
                  <a href="" class="text-dark">{{ $t("message.footer.success_stories") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.press_sections") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.advertise_with_us") }}</a>
                </div><!-- .footer-title end -->
              </div><!-- .col-12 end -->
              <div class="col-12 col-md">
                <div class="quick-link">
                  <router-link to="/help-center" class="text-dark">{{ $t("message.footer.help") }}</router-link>
                  <a href="" class="text-dark">{{ $t("message.footer.feedback") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.complaints") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.customer_care") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.jobs_careers") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.contact_us") }}</a>
                </div><!-- .footer-title end -->
              </div><!-- .col-12 end -->
              <div class="col-12 col-md">
                <div class="quick-link">
                  <h3 class="font-weight-bold h6 mb-5">{{ $t("message.footer.suppliers_tool_kit") }}</h3>
                  <a href="" class="text-dark">{{ $t("message.footer.sell_on_tizaara") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.latest_buyLead") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.learning_centre") }}</a>
                </div><!-- .footer-title end -->
              </div><!-- .col-12 end -->
              <div class="col-12 col-md">
                <div class="shopping-online">
                  <h3 class="font-weight-bold h6 mb-5">{{ $t("message.footer.buyers_tool_kit") }}</h3>
                  <a href="" class="text-dark">{{ $t("message.footer.post_your_requirement") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.products_you_buy") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.search_product_suppliers") }}</a>
                </div><!-- .footer-title end -->
              </div><!-- .col-12 end -->
              <div class="col-12 col-md">
                <div class="shopping-online">
                  <h3 class="font-weight-bold h6 mb-5">{{ $t("message.footer.events") }}</h3>
                  <a href="" class="text-dark">{{ $t("message.footer.trade_shows") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.conferences") }}</a>
                  <a href="" class="text-dark">{{ $t("message.footer.events_by_country") }}</a>
                </div><!-- .footer-title end -->
              </div><!-- .col-12 end -->
            </div><!-- .row end -->
          </div>
        </div><!-- .row end -->
      </div><!-- .container end -->
    </div><!-- .footer-top end -->

    <div class="footer-bottom bg-light overflow-hidden">
      <div class="container">
        <p class="float-left mt-2">&copy; {{ $t("message.footer.2020") }}
          <router-link to="/" class="text-success">{{ $t("message.footer.tizaara") }}</router-link>
          {{ $t("message.footer.all_rights_reserved") }}
        </p>
        <p class="float-right mt-2">
          <router-link to="/terms-conditions" class="text-success">{{ $t("message.footer.terms_of_use") }}</router-link>
          <router-link to="/privacy-policy" class="text-success">{{ $t("message.footer.privacy_policy") }}</router-link>
          <router-link to="/" class="text-success">{{ $t("message.footer.link_to_us") }}</router-link>

        </p>
      </div>
    </div><!-- .footer-bottom end -->
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
