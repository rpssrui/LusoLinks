<template>
    <BNavbar class="header">
        <BNavbarBrand href="/home" class="navbar-brand">
            <img src="..\static\images\logosvg.svg" class="logo-img" alt="luso links logo">
            Luso Links
        </BNavbarBrand>

        <BCollapse id="navbar-toggle-collapse" is-nav>

            <BNavbarNav class="ml-auto">

                <BNavItemDropdown text="Local Information">
                    <BDropdownItem href="#">Accommodation</BDropdownItem>
                    <BDropdownItem href="#">Cost of living</BDropdownItem>
                    <BDropdownItem href="#">Healthcare system</BDropdownItem>
                    <BDropdownItem href="#">Language and communication</BDropdownItem>
                    <BDropdownItem href="#">Local customs and culture</BDropdownItem>
                    <BDropdownItem href="#">Transportation</BDropdownItem>
                </BNavItemDropdown>

                <BNavItemDropdown text="Career and Education">
                    <BDropdownItem href="#">Education</BDropdownItem>
                    <BDropdownItem href="#">Job market</BDropdownItem>
                </BNavItemDropdown>

                <BNavItemDropdown text="Leisure and Lifestyle">
                    <BDropdownItem href="#">Local attractions and activities</BDropdownItem>
                    <BDropdownItem href="#">Networking and expat communitie</BDropdownItem>
                </BNavItemDropdown>

                <BNavItem href="#">Legal and Administrative</BNavItem>
                <BNavItem href="#">Weather and climate</BNavItem>
                <BNavItem href="#">Safety and Emergency</BNavItem>

            </BNavbarNav>
        </BCollapse>
    </BNavbar>
</template>
  
<script setup>

</script>
  
<style scoped lang="scss">
.header {
    background-color: $wine-red;

    .navbar-brand {
        color: whitesmoke;
        font-size: 2rem;
        font-weight: bold;
    }
    .logo-img {
        width: 100px;
        height: auto;
    }
}
:deep(.navbar-nav .nav-item .nav-link) {
    color: whitesmoke;
}
</style>