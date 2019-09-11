<template>
    <section class="schedule">
        <schedule-nav/>
        <div class="widget">
            <div class="widget__header">
                <h4 class="widget__title">Группа ЭД-192</h4>
            </div>
            <div class="table-scroller">
                <table class="schedule-table">
                    <thead>
                    <tr>
                        <th>
                            <div class="lesson-header">
                                <b class="text-dark">1 пара</b>
                                <span>(9:00 — 10:20)</span>
                            </div>
                        </th>
                        <th>
                            <div class="lesson-header">
                                <b class="text-dark">2 пара</b>
                                <span>(10:30 — 11:50)</span>
                            </div>
                        </th>
                        <th>
                            <div class="lesson-header">
                                <b class="text-dark">3 пара</b>
                                <span>(12:10 — 13:30)</span>
                            </div>
                        </th>
                        <th>
                            <div class="lesson-header">
                                <b class="text-dark">4 пара</b>
                                <span>(13:40 — 15:00)</span>
                            </div>
                        </th>
                        <th>
                            <div class="lesson-header">
                                <b class="text-dark">5 пара</b>
                                <span>(15:10 — 16:30)</span>
                            </div>
                        </th>
                        <th>
                            <div class="lesson-header">
                                <b class="text-dark">6 пара</b>
                                <span>(16:40 — 18:00)</span>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div class="lesson-info">
                                <h6 class="lesson-info__name">Металлообработка</h6>
                                <div class="lesson-info__item">Демин С. А.</div>
                                <div class="lesson-info__item">
                                    <span class="mr-2">ОЦ</span><b>УП</b>
                                </div>
                                <div class="lesson-info__status lesson-info__status--danger">Экзамен</div>
                            </div>
                        </td>
                        <td>
                            <div class="lesson-info">
                                <h6 class="lesson-info__name">Русский язык</h6>
                                <div class="lesson-info__item">Боровкова Е. Б.</div>
                                <div class="lesson-info__item">
                                    <span class="mr-2">ПМК</span><b>224</b>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="lesson-info">
                                <h6 class="lesson-info__name">Математика</h6>
                                <div class="lesson-info__item">Брова Л. В.</div>
                                <div class="lesson-info__item">
                                    <span class="mr-2">ПМК</span><b>228</b>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="lesson-info">
                                <h6 class="lesson-info__name">Информатика</h6>
                                <div class="lesson-info__item">Ибакеева С. Е.</div>
                                <div class="lesson-info__item">
                                    <span class="mr-2">ПМК</span><b>54</b>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="lesson-info">
                                <h6 class="lesson-info__name">Информатика</h6>
                                <div class="lesson-info__item">Ибакеева С. Е.</div>
                                <div class="lesson-info__item">
                                    <span class="mr-2">ПМК</span><b>54</b>
                                </div>
                            </div>
                        </td>
                        <td><div class="lesson-info">
                            <h6 class="lesson-info__name">Иностранный язык</h6>
                            <div class="lesson-info__item">Чиркова О. А.</div>
                            <div class="lesson-info__item">
                                <span class="mr-2">ПМК</span><b>55</b>
                            </div>
                        </div></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
    import ScheduleNav from './ScheduleNav'

    export default {
        name: 'schedule',
        components: {
            ScheduleNav
        },
        data() {
            return {

            }
        }
    }
</script>