<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class TriggerType extends Enum
{
    const Level = 0;
    const Experience = 1;
    const Discount = 2;
    const PucksCount = 3;
    const CoinsCount = 4;
    const CardsCount = 5;
    const PacksOpenedCount = 6;
    const RandomsPlayedCount = 7;
    const WinWheelPlayedCount = 8;
    const AuctionBidCount = 9;
    const AuctionBuyCount = 10;
    const BugReportCount = 11;
    const LoseSequenceCount = 12;
    const WinSequenceCount = 13;
    const AchievementsCount = 14;
    const SpentMoney = 15;
    const PromocodesCount = 16;
}
