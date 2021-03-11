<template>
    <div class="container">
        <div class="row gx-5">
            <div class="col-12 col-md-5">
                <user-profile-svg />
            </div>
            <div class="col-12 col-md-7">
                <table class="table table-borderless text-end">
                    <tbody>
                        <tr>
                            <th scope="row">Name</th>
                            <td class="td-left">:</td>
                            <td class="td-left">Mark</td>
                        </tr>
                        <tr>
                            <th scope="row">Applied Position</th>
                            <td class="td-left">:</td>
                            <td class="td-left">Jacob</td>
                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td class="td-left">:</td>
                            <td class="td-left">Larry the Bird</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import UserProfileSvg from "../../assets/svg/UserProfile";
export default {
    name: "TalentsDetail",
    components: {
        UserProfileSvg
    }
};
</script>

<style scoped>
th {
    padding: 0.25rem 0 0.25rem 0;
    width: 10rem;
    font-weight: 700;
}

td {
    padding: 0.25rem 0 0.25rem 0;
}

.td-left {
    text-align: left;
}
</style>
